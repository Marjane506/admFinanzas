import { ChevronDown, ChevronRight, Plus, Edit, Trash2 } from "lucide-react";

export default function CategoriaItem({
    categoria,
    onToggleExpand,
    onAddSub,
    onEdit,
    onDelete,
    onSelectSub, // 👈 LO AÑADÍ AQUÍ, IMPORTANTE
}) {
    return (
        <div className="border-b last:border-none">
            <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                    <button onClick={() => onToggleExpand(categoria.id)}>
                        {categoria.expanded ? (
                            <ChevronDown size={18} />
                        ) : (
                            <ChevronRight size={18} />
                        )}
                    </button>

                    <span className="font-medium">{categoria.name}</span>
                </div>

                <div className="flex items-center gap-3">
                    {/* Añadir subcategoría */}
                    <button
                        onClick={() => onAddSub(categoria.id)}
                        className="text-indigo-600 hover:text-indigo-800"
                    >
                        <Plus size={18} />
                    </button>

                    {/* Editar categoría */}
                    <button
                        onClick={() => onEdit(categoria)}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <Edit size={18} />
                    </button>

                    {/* Eliminar categoría */}
                    <button
                        onClick={() => onDelete(categoria.id)}
                        className="text-red-500 hover:text-red-700"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>

            {/* Subcategorías */}
            {categoria.expanded &&
                categoria.subcategorias &&
                categoria.subcategorias.length > 0 && (
                    <div className="pl-10 bg-gray-50">
                        {categoria.subcategorias.map((sub) => (
                            <div
                                key={sub.id}
                                className="flex justify-between px-4 py-2 border-t cursor-pointer hover:bg-gray-100"
                                onClick={() => onSelectSub(sub)} // 👈 AQUÍ ESTÁ BIEN PUESTO
                            >
                                <div className="flex items-center gap-3">
                                    <span className="w-3 h-3 rounded-full bg-gray-300" />
                                    <span>{sub.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    );
}
