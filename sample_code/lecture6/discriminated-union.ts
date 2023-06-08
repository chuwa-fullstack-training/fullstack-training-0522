interface Shape {
  kind: "square" | "circle";      // 清晰的，可分辨的不同值 进行 union
  radius?: number;
  sideLength?: number;
}

function area(s: Shape): number {
  if (s.kind === "square") {
    return s.sideLength! ** 2;
  } else {
    return Math.PI * s.radius! ** 2;
  }
}

area({ kind: "circle", sideLength: 10 });
