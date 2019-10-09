extends KinematicBody2D
signal killed
onready var animatedSprite = $CollisionShape2D/AnimatedSprite
onready var animatedSpriteL = $AnimatedSpriteL
onready var checkbox = $CollisionShape2D/AnimatedSprite/CheckBox
onready var label = $healthLabel
enum STATES {IDLE, FOLLOW, SELECTED, ATTACK, PURSUIT}
var _state = STATES.IDLE
var target_point_world = Vector2()
var target: Vector2 = Vector2()
var target_position = Vector2()
var velocity = Vector2()
var oldPos = Vector2()
var SPEED = 200
var path = []
var bodylist = []
var takingDamage = false
var beingHealed = false
var isEnemy = false
var atWin = false
var enemySighted = false
var selected = false
var receivingDamage = 0
var health = 20
var attack = 2
var defense = 0
var unitName = "Barista"
var unitType = "hipster"
var tick = 0
var timeElapsed = 0
var winPos
var hudposition
var spritePosition
var label1
var label2
var label3


func _ready():
	label1 = $"/root/test scene/hudbar/unit label1"
	label2 = $"/root/test scene/hudbar/unit label2"
	label3 = $"/root/test scene/hudbar/unit label3"
	winPos = $"/root/test scene/winpos"
	spritePosition = animatedSprite.position
	team_check()
	hudposition = global.numberOfSummons
	_change_state(STATES.IDLE)
	if isEnemy == false:
		display_hud_info()
	if isEnemy == true:
		set_collision_layer(2)
	pass 

# ---- onload 

func display_hud_info():
	if hudposition == 0:
		label1.set_text("Tank: "+str(health))
		label1.show()
	if hudposition == 1:
		label2.set_text("Tank: "+str(health))
		label2.show()
	if hudposition == 2:
		label3.set_text("Tank: "+str(health))
		label3.show()

func team_check():
	if global.team == "cowboy":
		isEnemy = true

# ---- State Machine

func _change_state(new_state):
	if not new_state == STATES.ATTACK:
		if len(bodylist) > 0:
			bodylist[0].is_not_being_attacked()
	if not new_state == STATES.SELECTED:
		selected = false
	if new_state == STATES.FOLLOW:
		path = get_parent().get_node('TileMap').find_path(position, target_position)
		if not path or len(path) == 1:
			_change_state(STATES.IDLE)
			return
		target_point_world = path[1]
	if new_state == STATES.SELECTED:
		selected = true
	if new_state == STATES.PURSUIT:
		path = get_parent().get_node('TileMap').find_path(position, target_position)
		if not path or len(path) == 1:
			_change_state(STATES.ATTACK)
			return
	if new_state == STATES.IDLE:
			if len(bodylist) > 0:
				_change_state(STATES.PURSUIT)
				return
			else:
				animatedSprite.play("idleR")
				animatedSprite.show()
				animatedSpriteL.hide()
	if new_state == STATES.ATTACK:
		if len(bodylist) > 0:
			print("is being attacked")
			bodylist[0].is_being_attacked()
			animatedSprite.play("atkR")
			animatedSprite.show()
			animatedSpriteL.hide()
	_state = new_state

# ---- input handlers

func _input(event):
	if isEnemy == false:
		if event.is_action_pressed('click'):
			if _state == STATES.SELECTED:
				target_position = get_global_mouse_position()
				_change_state(STATES.FOLLOW)

func _on_CheckBox_pressed():
	if isEnemy == false:
		if _state == STATES.IDLE:
			_change_state(STATES.SELECTED)
		if _state == STATES.ATTACK:
			_change_state(STATES.SELECTED)
			return

# ---- automatic processes

func go_to_win():
	if enemySighted == true:
		return
	if enemySighted == false:
		if timeElapsed == 3:
			target_position = winPos.position
			if atWin == false:
				_change_state(STATES.FOLLOW)

func _physics_process(delta: float) -> void:
	if not _state == STATES.SELECTED:
		$selector.hide()
	tick += delta
    die()
	if tick >= 1:
		heal()
		timeElapsed += 1
		take_damage()
		if isEnemy == true:
			go_to_win()
		tick -= 1
	if _state == STATES.FOLLOW:
		var arrived_to_next_point = move_to(target_point_world)
		if arrived_to_next_point:
			path.remove(0)
			if len(path) == 0:
				_change_state(STATES.IDLE)
				if target_point_world.distance_to(winPos.position) <= 20:
					atWin = true
				else:
					atWin = false
				return
			target_point_world = path[0]
	if _state == STATES.PURSUIT:
		if len(bodylist) == 0:
			_change_state(STATES.IDLE)
			return
		var bodyPositionOffset = bodylist[0].position.x - 15
		var bodyposition = Vector2(bodyPositionOffset, bodylist[0].position.y)
		var arrived_to_enemy = move_to_enemy(bodyposition)
		path = get_parent().get_node('TileMap').find_path(position, bodyposition)
		if arrived_to_enemy:
			path.remove(0)
			if len(path) == 0:
				if len(bodylist) > 0:
					_change_state(STATES.ATTACK)
					return
				else:
					_change_state(STATES.IDLE)
					return
	if isEnemy == false:
		die()
		if hudposition == 0:
			label1.set_text("Tank: "+str(health))
		if hudposition == 1:
			label2.set_text("Tank: "+str(health))
		if hudposition == 2:
			label3.set_text("Tank: "+str(health))

# ---- movement

func move_to(world_position):
	var MASS = 10.0
	var ARRIVE_DISTANCE = 20.0
	var desired_velocity = (world_position - position).normalized() * SPEED
	var steering = desired_velocity - velocity
	velocity += steering / MASS
	position += velocity * get_process_delta_time()
	if (target_position.x - position.x >= 0):
		#it's moving right
		animatedSprite.show()
		animatedSprite.play("walkR")
		animatedSpriteL.hide()
	if (target_position.x - position.x < 0):
		#it's moving left
		animatedSpriteL.show()
		animatedSprite.hide()
		animatedSpriteL.play("walkL")
	return position.distance_to(world_position) < ARRIVE_DISTANCE

func move_to_enemy(target):
	#target is enemy position
	var ARRIVE_DISTANCE = 50
	var MASS = 25
	var instanced_velocity = (target - position).normalized() * SPEED
	var acceleration = instanced_velocity - velocity
	velocity += acceleration / MASS
	position += velocity * get_physics_process_delta_time()
	return position.distance_to(target) < ARRIVE_DISTANCE

func being_attacked(x):
	takingDamage = true
	receivingDamage = x
	return receivingDamage

func heal():
	#max health 20
	if beingHealed == true:
		var a = health + 2
		if health < 20:
			health = a
		return health

func being_healed():
	beingHealed = true

func not_being_healed():
	beingHealed = false

func die():
	if health <= 0:
		queue_free()
		if isEnemy == false:
			if hudposition == 0:
				label1.hide()
			if hudposition == 1:
				label2.hide()
			if hudposition == 2:
				label3.hide()
		if isEnemy == false:
			global.numberOfSummons -= 1
		if isEnemy == true:
			emit_signal("killed")

func not_being_attacked():
	takingDamage = false

func take_damage():
	if takingDamage == true:
		var a = health - (receivingDamage - defense)
		health = a
		return health

# ---- area detectors
# ---- player units spawn on layer 3.
# ---- enemy units spawn on layer 2.
# ---- THIS IS TRUE REGARDLESS OF TEAM

func _on_Area2D_body_entered(body):
	if body.get_collision_layer() == 3:
		if isEnemy == true:
			# if enemy sees player
			bodylist.append(body)
			enemySighted = true
			_change_state(STATES.IDLE)
			timeElapsed = 0
		if isEnemy == false:
			# if player sees player
			pass
	if body.get_collision_layer() == 2:
		if isEnemy == false:
			# if player sees enemy
			bodylist.append(body)
			if _state == STATES.IDLE:
				_change_state(STATES.IDLE)
		if isEnemy == true:
			# if enemy sees enemy
			pass

func _on_Area2D_body_exited(body):
	if body.get_collision_layer() == 3:
		if isEnemy == true:
			# if enemy sees player
			body.is_not_being_attacked()
			bodylist.remove(0)
			if len(bodylist) == 0:
				if _state == STATES.ATTACK:
					_change_state(STATES.IDLE)
		if isEnemy == false:
			# if player sees player
			pass
	if body.get_collision_layer() == 2:
		if isEnemy == false:
			# if player sees enemy
			timeElapsed = 0
			bodylist.remove(0)
		if isEnemy == true:
			# if enemy sees enemy
			pass

