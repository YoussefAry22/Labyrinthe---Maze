let initial = new Point(0, 0);

let gameObject = {
  map: [
    [
      new box(true, false, false, false),
      new box(true,false, false, false),
      new box(true, false,true, false),
      new box(true,false, false, false),
      new box(true,false, true, false),
      new box(true,true, false, false),
      new box(true,false, false, true),
      new box(true,true, false, false),
      new box(true,false, false, true),
      new box(true,false, true, false),
      new box(true,false, true, false),
      new box(true,false, true, false),
      new box(true,true, false, false),
      new box(true,false, false, true),
      new box(true,false, false, false),
      new box(true,true, false, false),
      new box(true,false, true, true),
      new box(true,false, false, false),
      new box(true,false, true, false),
      new box(true,false, false, false),
      new box(true,false, true, false),
      new box(true,false, true, false),
      new box(true,true, false, false),
      new box(true,false, true, true),
      new box(true,true, false, false),
      new box(true,false, false, true),
      new box(true,true, true, false),
      new box(true,false, false, true),
      new box(true,false, true, false),
      new box(true,false, true, false),
    ],
    [
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false, true, true, true),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, true, true, false),
      new box(false, true, false, true),
      new box(false, true, true, true),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(false, false, true, false),
      new box(true, true, true, false),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, false, false, true),
      new box(true, false, true, false),
      new box(false, false, true, false),
      new box(true, false, true, false),
      new box(true, true, false, false),
      
    ],
    [
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, true, true, true),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, false, false, false),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(true, false, false, false),
      new box(true, true, false, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, true, true, false),
      new box(false, true, false, true),
    ],
    [
      new box(true, false, false, true),
      new box(false, true, false, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, false, true, true),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false, true, true, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false, true, true, true),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(false,true, true, true),
      new box(false, false, true, true),
      new box(true, false, false, false),
      new box(false, true, false, false),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, true, true, false),
      new box(false, false, false, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(false, true, true, false),
    ],
    [
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(true, true, false, true),
      new box(false, false, false, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(false, true, false, false),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(true, false, true, true),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, true, false, true),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, false, false, false),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(true, true, false, true),
    ],
    [
      new box(false, true, true, true),
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, true, true, false),
      new box(false, true, false, true),
      new box(true, true, false, true),
      new box(true, false, false, true),
      new box(false, true, false, false),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(true, false, true, true),
      new box(false, true, true, false),
      new box(true, false, true, true),
      new box(false, false, true, false),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(false, false, false, false),
    ],
    [
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(true, false, true, true),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, false, false, true),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, false, false, false),
      new box(true, true, true, false),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, false, false, false),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
    ],
    [
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(false, false, true, false),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, true, true, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(true, false, true, true),
      new box(false, true, false, false),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, true, true),
    ],
    [
      new box(false, true, true, true),
      new box(true, false, false, true),
      new box(false, false, true, false),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(false, true, true, true),
      new box(true, false, false, true),
      new box(false, false, true, false),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, true, true, true),
      new box(false, false, true, true),
      new box(true, true, false, false),
    ],
    [
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(false, true, false, false),
      new box(false, true, true, true),
      new box(false, true, false, true),
      new box(false, true, true, true),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(true, true, true, false),
      new box(false, false, false, true),
      new box(true, true, false, false),
      new box(false, false, false, true),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
    ],
    [
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, false, true, false),
      new box(true, true, true, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(false, true, false, false),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, false, false, false),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, false, false, true),
      new box(true, true, false, false),
      new box(false, true, true, true),
      new box(false, false, true, true),
      new box(false, true, false, false),
      new box(false, true, true, true),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(false, true, true, true),
      new box(false, false, true, true),
      new box(false, false, true, false),
      new box(true, false, false, false),
      new box(true, true, false, false),
      
    ],
    [
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(true, true, false, true),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(false, true, true, true),
      new box(false,false, true, true),
      new box(false,false, true, false),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(false, true,false, true),
      new box(true, false, false, true),
      new box(false, false, true, false),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(false, true, true, true),
      new box(false, true, false, true),
    ],
    [
      new box(true,false, false, true),
      new box(true, false, true, false),
      new box(false, false, true, false),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, true, true, false),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, true, false, false),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(true, false, true, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(false, true, false, false),
    ],
    [
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, false, false, false),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false, true, true, true),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, true, false, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false,false,false, true),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(true, false, true, true),
      new box(false, false, true, false),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, true, false, true),
    ],
    [
      new box(true, false, false, true),
      new box(true, false, false, false),
      new box(false, true, true, false),
      new box(true, false, true, true),
      new box(false,false, false, false),
      new box(false, true, true, false),
      new box(false, true,false, true),
      new box(false,false, true, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(true,false, true, false),
      new box(false, true, true,false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(true, false, true, true),
      new box(false, true, false,false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(false, false, true, false),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
    ],
    [
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(true, false, true, true),
      new box(true, false, true, false),
      new box(false, false, true, false),
      new box(true, true, false, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(true, false, false,true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(false, true, true, true),
      new box(false, true, false, true),
      new box(false, true, true, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
    ],
    [
      new box(false, true, true, true),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, false, false, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(true, false, false, false),
      new box(true, true, true, false),
      new box(true, false, false, false),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(false, true, true,false),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(false, false, true, false),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(false, true, true, true),
      new box(false, true, false, true),
    ],
    [
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, true, true, true),
      new box(false, false, true, true),
      new box(true, false, false, false),
      new box(false, false, false, false),
      new box(false, true, true, false),
      new box(false, true, true, true),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(true, false, false,true),
      new box(false, true, true, false),
      new box(false, true, true, true),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(true, true, false, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
    ],
    [
    new box(false, false, true, true),
    new box(true, true, false, false),
    new box(true, false, false, true),
    new box(true, false, true, false),
    new box(true, true, false, false),
    new box(true, false, true, true),
    new box(true, false, true, false),
    new box(true, true, false, false),
    new box(true, false, false, true),
    new box(false, true, true, false),
    new box(false, false, true, true),
    new box(true, true, false, false),
    new box(true, false, true, true),
    new box(true, false, true, false),
    new box(false, false, true, false),
    new box(true, true, true, false),
    new box(false, true, false, true),
    new box(true, false, true, true),
    new box(true, false, false, false),
    new box(false, true, true, false),
    new box(true, true, false, true),
    new box(true, false, false, true),
    new box(true, true, false, false),
    new box(false, true, false, true),
    new box(false, false, true, true),
    new box(true, false, true, false),
    new box(true, true, false, false),
    new box(false, true, false, true),
    new box(false, false, true, true),
    new box(true, false, false, false),
  ],
    [
      new box(true, true, false, true),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, true, true, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, false, true, false),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, false, true, false),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(true, true, false, true),
      new box(true, false, false, true),
      new box(false, true, false, false),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(true, true, false, true),
      new box(false, false, false, true),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(false, false, true, false),
      new box(true, false, true, false),
      new box(true, true, true, false),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
    ],
    [
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(false, true, false, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, true, false, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(true, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
    ],
    [
      new box(false, false, true, true),
      new box(true, false, false, false),
      new box(true, true, false, false),
      new box(true, true, false, true),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(true, false, false, false),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(false, false, false, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(false, false, true, true),
      new box(false, true, false, false),
      new box(true, false, false, true),
      new box(false, true, false, false),
      new box(false, false, true, true),
      new box(false, true, false, false),
    ],
    [
      new box(true, false, true, true),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(false, false, false, false),
      new box(false, true, true, false),
      new box(false, false, false, true),
      new box(false, true, true, false),
      new box(false, false, false, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, true, true, true),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(false, true, false, false),
    ],
    [
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(false, true, false, false),
      new box(false, true, false, true),
      new box(false, false, true, true),
      new box(true, true, true, false),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(true, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, false, true),
      new box(false, true, true, true),
      new box(true, false, false, true),
      new box(true, false, false, false),
      new box(true, true, false, false),
      new box(true, false, true, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(false, true, true, true),
      new box(false, false, true, true),
      new box(true, false, false, false),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(false, true, false, true),
    ],
    [
      new box(false, true, false, true),
      new box(true, true, false, true),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(false, false, false, true),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, true, true, true),
      new box(false, false, true, true),
      new box(true, false, false, false),
      new box(true, false, true, false),
      new box(true, true, true, false),
      new box(false, false, false, true),
      new box(true, false, false, false),
      new box(true, false, true, false),
      new box(false, true, false, false),
      new box(true, true, false, true),
      new box(false, false, true, true),
      new box(false, true, false, false),
    ], 
    [
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(true, false, false, false),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(false, false, true, false),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, true, true, true),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(false, true, true, true),
      new box(false, true, false, true),
      new box(true, false, true, true),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(false, true, true, false),
    ], 
    [
      new box(true, false, false, true),
      new box(true, true, true, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, true, false, true),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(true, false, false, true),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, true, false, true),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, false, true, false),
      new box(false, false, false, false),
    ], 
    [
      new box(false, false, false, true),
      new box(true, false, true, false),
      new box(true, true, true, false),
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(false, true, true, false),
      new box(false, false, true, true),
      new box(true, true, false, false),
      new box(true, true, false, true),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, true, true, true),
      new box(false, true, false, true),
      new box(true, false, false, true),
      new box(true, false, true, false),
      new box(true, true, false, false),
      new box(true, false, true, true),
      new box(false, true, false, false),
      new box(false, false, true, true),
      new box(true, false, true, false),
      new box(false, false, true, false),
      new box(true, true, false, false),
      new box(false, true, false, true),
      new box(false, false, false, true),
      new box(true, false, false, false),
      new box(true, true, false, false),
      new box(false, true, true, true),
  ],    
[
     new box(false, false, true, true),
     new box(true, false, false, false),
     new box(true, true, false, false),
     new box(true, true, false, true),
     new box(true, false, false, true),
     new box(true, true, false, false),
     new box(true, false, false, true),
     new box(true, false, true, false),
     new box(false, false, true, false),
     new box(false, true, true, false),
     new box(false, false, true, true),
     new box(false, true, true, false),
     new box(false, true, false, true),
     new box(false, false, true, true),
     new box(true, false, true, false),
     new box(false, true, true, false),
     new box(false, false, true, true),
     new box(true, true, true, false),
     new box(false, true, false, true),
     new box(true, true, false, true),
     new box(false, false, true, true),
     new box(true, false, true, false),
     new box(true, false, false, false),
     new box(true, false, false, false),
     new box(false, true, true, false),
     new box(false, false, true, true),
     new box(false, true, true, false),
     new box(false, true, true, true),
     new box(false, false, false, true),
     new box(true, true, false, false),
 ],
 [
     new box(true, false, true, true),
     new box(false, true, true, false),
     new box(false, false, true, true),
     new box(false, false, true, false),
     new box(false, true, true, false),
     new box(false, false, true, true),
     new box(false, false, true, false),
     new box(true, false, true, false),
     new box(true, false, true, false),
     new box(true, false, true, false),
     new box(true, false, true, false),
     new box(true, true, true, false),
     new box(false, false, true, true),
     new box(true, false, true, false),
     new box(true, false, true, false),
     new box(true, false, true, false),
     new box(true, false, true, false),
     new box(true, false, true, false),
     new box(false, true, true, false),
     new box(false, false, true, true),
     new box(true, false, true, false),
     new box(true, false, true, false),
     new box(false, true, true, false),
     new box(false, false, true, true),
     new box(true, false, true, false),
     new box(true, false, true, false),
     new box(true, false, true, false),
     new box(true, false, true, false),
     new box(false, true, true, false),
     new box(false, false, true, true),
  ],
  ] ,
  Lost: false,
  isPaused: false,
  Won: false,
  distance: 0,
  initial: initial,
  person: new Point(initial.i, initial.j),
  goal: new Point(29, 29),
  timer: 120,

  get eatenPricesNumber() {
    return this.prices.filter((price) => price.isEaten).length;
  },

  get eatenEnemeies() {
    return this.enemies.filter((enemy) => enemy.isEaten).length;
  },

  get score() {
    return (
      this.eatenPricesNumber * 3 +
      this.eatenEnemeies * -3 +
      this.timer / 10 +
      (this.distance == 0 ? 0 : Math.floor(100 / this.distance))
    );
  },
};

gameObject.prices = generatePricesList(gameObject);
gameObject.enemies = generateEnemiesList(gameObject);
gameObject.traps = generateTrapsList(gameObject);
