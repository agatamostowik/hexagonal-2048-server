import { Router } from "express";
import _ from "lodash";

export const rootRouter = Router();

const createGrid = (values) => {
  return values.reduce((a, v1) => {
    return values.reduce((b, v2) => {
      return values.reduce((c, v3) => {
        const isValid = v1 + v2 + v3 === 0;

        if (isValid) {
          return [...c, { x: v1, y: v2, z: v3 }];
        } else {
          return c;
        }
      }, b);
    }, a);
  }, []);
};

rootRouter.post("/api/:radius", (req, res) => {
  const radius = req.params.radius;
  const occupiedCells = req.body;

  const rangeOfValues = _.range(-(radius - 1), radius);
  const grid = createGrid(rangeOfValues);

  if (occupiedCells.length === 0) {
    const randomlyPickedCells = _.sampleSize(grid, 3);

    const initialValues = randomlyPickedCells.map((cell) => {
      return { ...cell, value: 2 };
    });

    res.json(initialValues);
  } else {
    const values = [2, 4];
    const emptyCells = _.differenceWith(grid, occupiedCells, (a, b) => {
      return a.x === b.x && a.y === b.y && a.z === b.z;
    });
    const newCell = _.sampleSize(emptyCells, 1);
    const newCellWithValue = newCell.map((cell) => {
      return { ...cell, value: _.sample(values) };
    });

    res.json(newCellWithValue);
  }
});
