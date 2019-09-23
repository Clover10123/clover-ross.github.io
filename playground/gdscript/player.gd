extends KinematicBody2D
var target: Vector2 = Vector2()
var selected = false
var wasSelected = false
onready var animatedSprite = $CollisionShape2D/AnimatedSprite
onready var animatedSpriteL = $AnimatedSpriteL
onready var checkbox = $CollisionShape2D/AnimatedSprite/CheckBox
var walker = false
var circle = Vector2()
var spritePosition
var oldPos = Vector2()
# Declare member variables here. Examples:
# var a = 2
# var b = "text"

# Called when the node enters the scene tree for the first time.
func _ready():
	spritePosition = animatedSprite.position
	pass # Replace with function body.

func selector():
	if selected == false:
		selected = true
		
func placePoint():
	circle = target

func walk():
	placePoint()
	if global_position.distance_to(circle) > 5:
		var direction: Vector2 = to_local(circle).normalized()
		move_and_slide(direction * 200)
		if (circle.x - oldPos.x >= 0):
			animatedSprite.play("walkR")
		if (circle.x - oldPos.x < 0):
			animatedSprite.visible = !visible
			animatedSpriteL.visible = visible
			animatedSpriteL.play("walkL")
	else:
		animatedSprite.visible = visible
		animatedSpriteL.visible = !visible
		animatedSprite.play("idleR")
		walker = false
		
#func change_state(state_name):
	
#	pass

func _input(event):
	if Input.is_mouse_button_pressed(BUTTON_LEFT):
			if selected == true:
				wasSelected = true
			if wasSelected == false:
				pass
			else:
				if (wasSelected):
					target = get_global_mouse_position()
					walker = true
					wasSelected = false
					selected = false
					
	update()
	pass

func _on_CheckBox_pressed():
	target = get_global_mouse_position()
	oldPos = target
	selector()
	 # Replace with function body.
	
func _physics_process(delta: float) -> void:
	if (walker):
		walk()
