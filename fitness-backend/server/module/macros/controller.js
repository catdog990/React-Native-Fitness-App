import Macro from './model';

export const createMacro = async (req, res) => {
    const { Weight, Goal, Protein, Fat, Carbs } = req.body;
    const newMacro = new Macro({ Weight, Goal, Protein, Fat, Carbs });

    try{
        return res.status(201).json({macro: await newMacro.save() });
    } catch (e) {
        return res.status(e.status).json({error: true, message: 'Error with Macro'})
    }
}

export const getMacros = async (req, res) => {
    try{
        return res.status(200).json({macro: await Macro.find({}) });
    } catch(e) {
        return res.status(e.status).json({error: true, message: 'Error with Getting Macros'})

    }
}