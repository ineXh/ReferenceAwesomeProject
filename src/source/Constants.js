var constants = function(){};

window.METER = 100;

window.PI = Math.PI;

function constants(){};

constants.GameState = function(){};
constants.GameState.Title = 0;
constants.GameState.GetReady = 1;
constants.GameState.InPlay = 2;
constants.GameState.GameOver = 3;

constants.ObjectType = function(){};
constants.ObjectType.Invalid = -1;
constants.ObjectType.Ball = 0;
constants.ObjectType.Box = 1;
constants.ObjectType.GiantTriangle = 2;
constants.ObjectType.Character = 10;
constants.ObjectType.Boundary = 50;
constants.ObjectType.Particle = 100;
