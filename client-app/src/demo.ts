export interface ICar {
  color: string
  model: string
  topSpeed?: number
}

const car1: ICar = {
  color: 'yellow',
  model: 'Aventador',
  topSpeed: 330
}

const car2: ICar = {
  color: 'white',
  model: 'Megane'
}

const multiply = (n1: number, n2: number): number => n1 * n2

export const cars = [car1, car2]
