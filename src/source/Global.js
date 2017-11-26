var count = 0;
var stage = 0;
var fr = 60;
var bg = null;
var gameState = constants.GameState.Title;
var userInterface = null;
var gamePlay = null;
var gravity = null;
var cannon = null;
var cannon2 = null;
var world;
var tempb2Vec2 =  null;

// dimensions
var boxSide;
var baseGravity = 1/36;

//var balls = [];
var pool = {}
pool[constants.ObjectType.Ball] = [];
pool[constants.ObjectType.Box] = [];
pool[constants.ObjectType.GiantTriangle] = [];
pool[constants.ObjectType.Character] = [];
pool[constants.ObjectType.Particle] = [];

var objects = {}
objects[constants.ObjectType.Ball] = [];
objects[constants.ObjectType.Box] = [];
objects[constants.ObjectType.GiantTriangle] = [];
objects[constants.ObjectType.Character] = [];
objects[constants.ObjectType.Particle] = [];