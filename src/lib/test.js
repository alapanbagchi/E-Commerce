const z = require("zod");

const ScoreSchema = z.object({
  points: z.coerce.number().min(1, {message: "Points must be atleast 1"}),
  count: z.coerce.number().min(1, {message: "Count must be atleast 1"}),
  measuring_unit: z.string().min(1, {message: "Measuring unit is required"}),
})


console.log(ScoreSchema.parse({
  points:"",
  count:"",
  measuring_unit:""
}))
