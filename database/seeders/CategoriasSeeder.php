<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categorias')->insert([
            [
                'name' => 'Alimentación',
                'user_id' => 1,
            ],
            [
                'name' => 'Transporte',
                'user_id' => 1,
            ],
            [
                'name' => 'Vivienda',
                'user_id' => 1,
            ],
            [
                'name' => 'Salario',
                'user_id' => 1,
            ],
            [
                'name' => 'Inversiones',
                'user_id' => 1,
            ],
        ]);
    }
}
