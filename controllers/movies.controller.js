import Movie from "../model/movie.model.js";

export const MovieCreate = async (req, res) => {
    console.log(req.body);

    const newMovie = new Movie({
        title : req.body.title,
        actor : req.body.actor,
        music : req.body.music
    })

    try{
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    }catch (error) {
        return res.status(400).json({message : error.message})
    }

    
};


export const MovieView = async (req, res)=>{

    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
};

export const MovieShow = async (req, res)=>{
    try {
        const movie = await Movie.findById(req.params.id);

        if(movie == null){
            return res.status(404).json({message : "Cannont find movie"});
        }
        else{
            res.json(movie);
        }

        
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
};

export const MovieEdit = async (req, res) => {
    const updates = {};
    if (req.body.title != null) updates.title = req.body.title;
    if (req.body.actor != null) updates.actor = req.body.actor;
    if (req.body.music != null) updates.music = req.body.music;

    try {
        const result = await Movie.findByIdAndUpdate(req.params.id, updates, { new: true });

        if (!result) {
            return res.status(404).json({ message: "Movie not found" });
        }

        return res.status(200).json({ message: "Movie updated successfully", data: result });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const MovieDelete = async (req, res) => {
    try {
        const result = await Movie.findByIdAndDelete(req.params.id);
        
        if (!result) {
            return res.status(404).json({ message: "Movie not found" });
        }

        return res.status(200).json({ message: "Movie deleted successfully", data: result });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
