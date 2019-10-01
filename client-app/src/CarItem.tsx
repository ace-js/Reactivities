import React from 'react'
import { ICar } from './demo'

interface IProps {
  car: ICar
}

const CarItem: React.FC<IProps> = ({ car }) => {
  return (
    <div>
      <h1>{car.model}</h1>
      <p>color: {car.color}</p>
      <p>top speed: {car.topSpeed ? `${car.topSpeed}kms/h` : 'Unknown'}</p>
    </div>
  )
}

export default CarItem
