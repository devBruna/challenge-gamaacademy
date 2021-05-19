import joi from 'joi'

class CreateTestValidation {

    private choice = joi.object({

        text: joi.string()
        .required(),

        isCorrect: joi.number()
        .min(0)
        .max(1)
        .required()

    })

    private test = joi.array()

    private question = joi.object({

        title: joi.string()
        .required(),

        description: joi.string(),

        orderPosition: joi.number()
        .required(),

        choices: joi.array().items(this.choice)

    })

    private scheme = joi.object({

        title: joi.string()
        .required(),

        questions: joi.array().items(this.question)

    })

    public validate (object: object): joi.ValidationResult {
        return this.scheme.validate(object)
    } 
}

export default new CreateTestValidation()