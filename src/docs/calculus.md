---
title: Calculus
permalink: /guides/compute-engine-calculus/
layout: single
date: Last Modified
sidebar:
  - nav: 'mathjson'
---
<script type='module'>
    import {renderMathInDocument} from '//unpkg.com/mathlive/dist/mathlive.mjs';
    renderMathInDocument();
</script>

# Calculus
### Lagrange Notation

| Latex                 | MathJSON           |
| :-------------------- | :----------------- |
| `f'(x)`               | `["Derive", f, x]` |
| `f''(x)`              |                    |
| `f\prime(x)`          |                    |
| `f\prime\prime(x)`    |                    |
| `f\doubleprime(x)`    |                    |
| `f^{\prime}(x)`       |                    |
| `f^{\prime\prime}(x)` |                    |
| `f^{\doubleprime}(x)` |                    |

@todo: `f^{(4)}`

## Leibniz Notation

| Latex                                       | MathJSON |
| :------------------------------------------ | :------- |
| `\frac{\partial f}{\partial x}`             |          |
| `\frac{\partial^2 f}{\partial x\partial y}` |

## Euler Modified Notation

This notation is used by Mathematica. The Euler notation uses `D` instead of
`\partial`

| Latex              | MathJSON |
| :----------------- | :------- |
| `\partial_{x} f`   |          |
| `\partial_{x,y} f` |          |

## Newton Notation (@todo)

`\dot{v}` -> first derivative relative to time t `\ddot{v}` -> second derivative
relative to time t

### Integral

## Indefinite Integral

`\int f dx` -> ["Integrate", f, x,] `\int\int f dxdy` -> ["Integrate", f, x, y]

Note: `["Integrate", ["Integrate", f , x], y]` is equivalent to
`["Integrate", f , x, y]`

## Definite Integral

`\int_{a}^{b} f dx` -> ["Integrate", f, [x, a, b]]
`\int_{c}^{d} \int_{a}^{b} f dxdy` -> ["Integrate", f, [x, a, b], [y, c, d]]

`\int_{a}^{b}\frac{dx}{f}` -> ["Integrate", ["Power", f, -1], [x, a, b]]

`\int_{a}^{b}dx f` -> ["Integrate", f, [x, a, b]]

If `[a, b]` are numeric, numeric methods are used to approximate the integral.

## Domain Integral

`\int_{x\in D}` -> ["Integrate", f, ["In", x, D]]

### Contour Integral

`\oint f dx` -> `["ContourIntegral", f, x,]`

`\varointclockwise f dx` -> `["ClockwiseContourIntegral", f, x]`

`\ointctrclockwise f dx` -> `["CounterclockwiseContourIntegral", f, x,]`

`\oiint f ds` -> `["DoubleCountourIntegral", f, s]` : integral over closed
surfaces

`\oiiint` f dv -> `["TripleCountourIntegral", f, v]` : integral over closed
volumes

`\intclockwise`

`\intctrclockwise`

`\iint`

`\iiint`
