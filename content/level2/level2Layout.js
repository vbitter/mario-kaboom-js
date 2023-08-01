export const level2Mappings = {
  0: () => [
    sprite("brick-tileset", { anim: "tl" }),
    area(),
    body({ isStatic: true }),
    offscreen(),
  ],
  1: () => [
    sprite("brick-tileset", { anim: "tm" }),
    area(),
    body({ isStatic: true }),
    offscreen(),
  ],
  2: () => [
    sprite("brick-tileset", { anim: "tr" }),
    area(),
    body({ isStatic: true }),
    offscreen(),
  ],
  3: () => [
    sprite("brick-tileset", { anim: "ml" }),
    area(),
    body({ isStatic: true }),
    offscreen(),
  ],
  4: () => [sprite("brick-tileset", { anim: "mm" }), offscreen()],
  5: () => [
    sprite("brick-tileset", { anim: "mr" }),
    area(),
    body({ isStatic: true }),
    offscreen(),
  ],
  6: () => [sprite("brick-tileset", { anim: "ml-2" }), offscreen()],
  7: () => [sprite("brick-tileset", { anim: "mm-2" }), offscreen()],
  8: () => [sprite("brick-tileset", { anim: "mr-2" }), offscreen()],
  9: () => [
    sprite("brick-oneway-tileset", { anim: "tl" }),
    area({ shape: new Rect(vec2(0), 16, 3) }),
    "passthrough",
    body({ isStatic: true }),
    offscreen(),
  ],
  a: () => [
    sprite("brick-oneway-tileset", { anim: "tm" }),
    area({ shape: new Rect(vec2(0), 16, 3) }),
    "passthrough",
    body({ isStatic: true }),
    offscreen(),
  ],
  b: () => [
    sprite("brick-oneway-tileset", { anim: "tr" }),
    area({ shape: new Rect(vec2(0), 16, 3) }),
    "passthrough",
    body({ isStatic: true }),
    offscreen(),
  ],
  c: () => [sprite("brick-oneway-tileset", { anim: "ml" }), offscreen()],
  d: () => [sprite("brick-oneway-tileset", { anim: "mm" }), offscreen()],
  e: () => [sprite("brick-oneway-tileset", { anim: "mr" }), offscreen()],
  o: () => [sprite("bridge"), area(), body({ isStatic: true }), offscreen()],
  "@": () => [sprite("coin"), area(), "coin", offscreen()],
}

export const level2Layout = [
  [
    "                                                                                                                                            ",
    "                                                                                                                                            ",
    "                                 @ 9aab                                                                                                     ",
    "                                   cdde                                                                                                     ",
    "                           @   9aabcdde                9aab                      @                           @  @  @                        ",
    "                               cddecdde                cdde                                               0111111111112                     ",
    "                           9aabcddecdde                cdde 9aab                9aab    9aaaboooo9aaab    3444444444445                     ",
    "                           cddecddecdde                cdde cdde          @     cdde    cddde    cddde    3444444444445         @           ",
    "                           cddecddecdde                cdde cdde                cdde    cddde    cddde    3444444444445       @           @ ",
    "                   011111111111111111112       012ooooo011111111111111111112oooo0111111111112    0111111123444444444445    0111111111112    ",
    "                   344444444444444444445       345     344444444444444444445    3444444444445    3444444453444444444445    3444444444445    ",
    "                   677777777777777777778       678     677777777777777777778    6777777777778    6777777777777777777778    6777777777778    ",
  ],
  [
    "                                                                                                                               ",
    "                                                                                                                               ",
    "                                                                                                                               ",
    "                                                                                                                               ",
    "                                                                                                                               ",
    "                                                                                                                               ",
    "                                                                                                                               ",
    "                                                                                                                               ",
    "                                                                                         @ @      @ @                          ",
    "                                                                                                                               ",
    "                                                                                                                               ",
    "                                                                                                                               ",
  ],
]