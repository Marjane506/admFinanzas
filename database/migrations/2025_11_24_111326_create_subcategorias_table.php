<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('subcategorias', function (Blueprint $table) {
            // Eliminar columnas que ya no queremos
            if (Schema::hasColumn('subcategorias', 'type')) {
                $table->dropColumn('type');
            }
            if (Schema::hasColumn('subcategorias', 'value')) {
                $table->dropColumn('value');
            }
            if (Schema::hasColumn('subcategorias', 'date')) {
                $table->dropColumn('date');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('subcategorias', function (Blueprint $table) {
            // Volver a agregar por si se hace rollback
            $table->enum('type', ['gasto', 'ingreso'])->nullable();
            $table->decimal('value', 10, 2)->nullable();
            $table->date('date')->nullable();
        });
    }
};
