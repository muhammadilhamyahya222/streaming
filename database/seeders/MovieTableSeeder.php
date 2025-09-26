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
                'name' => 'Inception',
                'slug' => 'inception',
                'category' => 'Sci-Fi',
                'video_url' => 'https://example.com/inception.mp4',
                'thumbnail' => 'https://example.com/inception.jpg',
                'rating' => 4.8,
                'is_featured' => 1,
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://example.com/the-dark-knight.mp4',
                'thumbnail' => 'https://example.com/the-dark-knight.jpg',
                'rating' => 4.9,
                'is_featured' => 0,
            ],
            [
                'name' => 'Interstellar',
                'slug' => 'interstellar',
                'category' => 'Adventure',
                'video_url' => 'https://example.com/interstellar.mp4',
                'thumbnail' => 'https://example.com/interstellar.jpg',
                'rating' => 4.7,
                'is_featured' => 0,
            ],
        ];

        Movie::insert($movies);
    }
}
