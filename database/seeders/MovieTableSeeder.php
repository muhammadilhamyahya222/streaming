<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'Agak Laen',
                'slug' => 'agak-laen',
                'category' => 'Comedy',
                'video_url' => 'https://www.youtube.com/watch?v=0YLSPyGA4h0', // Trailer resmi
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/0/01/Poster_Agak_Laen_%282024%29.jpg',
                'rating' => 4.7,
                'is_featured' => 1,
            ],
            [
                'name' => 'Jumbo',
                'slug' => 'jumbo',
                'category' => 'Comedy',
                'video_url' => 'https://www.youtube.com/watch?v=yMqDgbZmBdk',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/thumb/e/e6/Poster_film_Jumbo.jpg/250px-Poster_film_Jumbo.jpg',
                'rating' => 4.5,
                'is_featured' => 0,
            ],
            [
                'name' => 'Sri Asih',
                'slug' => 'sri-asih',
                'category' => 'Superhero',
                'video_url' => 'https://www.youtube.com/watch?v=564eG_1Mvf0',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/d/d4/Sri-Asih-Poster.jpg',
                'rating' => 4.4,
                'is_featured' => 0,
            ],
            [
                'name' => 'Habibie & Ainun',
                'slug' => 'habibie-ainun',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=DlU_FyHXS7M',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/7/74/Habibie_Ainun_Poster.jpg',
                'rating' => 4.8,
                'is_featured' => 0,
            ],
            [
                'name' => 'Dilan 1990',
                'slug' => 'dilan-1990',
                'category' => 'Romance',
                'video_url' => 'https://www.youtube.com/watch?v=X_b-wNkz4DU',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/1/19/Dilan_1990_%28poster%29.jpg',
                'rating' => 4.6,
                'is_featured' => 0,
            ],
        ];



        Movie::insert($movies);
    }
}
