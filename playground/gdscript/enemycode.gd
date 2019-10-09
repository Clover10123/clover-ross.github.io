extends KinematicBody2D
var health = 10
var damaging = false
var tick = 0
var selected = false
var path = []
enum STATES {SELECTED, IDLE, FOLLOW, PURSUIT, ATTACK}
var _state = STATES.IDLE
var target_point_world = Vector2()
var target_position = Vector2()
var SPEED = 200
var velocity = Vector2()
var winPos 
var timeElapsed = 0
var bodylist = []
var atWin = false
var enemySighted = true
#enemy pathfinder.
#the find_path method takes two arguments, a start and an end. the start should always be its initial position
#and the end should always be the "click". but in this case, we want it to be a point the algorithm selects.
#so the pathfinder will find the winposition, attempt to draw a path to it, and follow it. it will stop if it sees a player unit.



func _change_state(new_state):
	if new_state == STATES.IDLE:
		timeElapsed = 0
		if enemySighted == true:
			_change_state(STATES.PURSUIT)
			return
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
		print("state machine pursuit")
		print(_state)
		if not path or len(path) == 1:
			print("state machine attack")
			_change_state(STATES.ATTACK)
			return
	if new_state == STATES.ATTACK:
		if len(bodylist) > 0:
			print("Player is being attacked")
			bodylist[0].is_being_attacked()
	_state = new_state



func take_damage():
	if len(bodylist) > 0:
		if damaging == true:
			var a = health - 3
			health = a
			return health

func go_to_win():
	if enemySighted == true:
		return
	if enemySighted == false:
		if timeElapsed == 3:
			target_position = winPos.position
			if atWin == false:
				_change_state(STATES.FOLLOW)


func _physics_process(delta):
	kill()
	tick += delta
	if tick >= 1.0:
		take_damage()
		timeElapsed += 1
		go_to_win()
		tick -= 1.0
	if len(bodylist) == 0:
		enemySighted = false
	if _state == STATES.FOLLOW:
		var arrived_to_next_point = move_to(target_point_world)
		if arrived_to_next_point:
			path.remove(0)
			if len(path) == 0:
				_change_state(STATES.IDLE)
				if target_point_world.distance_to(winPos.position) <= 20:
					atWin = true
					print("win!")
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

func is_being_attacked():
	damaging = true

func is_not_being_attacked():
	damaging = false
	
func kill():
	if health <= 0:
		queue_free()
# Called when the node enters the scene tree for the first time.
func _ready():
	set_collision_mask(2)
	winPos = get_parent().get_node("winpos")
	pass # Replace with function body.



func move_to(world_position):
	var MASS = 10.0
	var ARRIVE_DISTANCE = 20.0
	var desired_velocity = (world_position - position).normalized() * SPEED
	var steering = desired_velocity - velocity
	velocity += steering / MASS
	position += velocity * get_process_delta_time()
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

func _on_Area2D_body_entered(body):
	if body.get_collision_mask() == 3:
		bodylist.append(body)
		enemySighted = true
		_change_state(STATES.IDLE)
		timeElapsed = 0
	pass # Replace with function body.


func _on_Area2D_body_exited(body):
	print("exit.")
	timeElapsed = 0
	bodylist.remove(0)
	pass # Replace with function body.
	
