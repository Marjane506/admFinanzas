import { useState } from "react";
import { router } from "@inertiajs/react";
import CategoriaItem from "../Components/CategoriaItem";
import ModalNuevaCategoria from "../Components/ModalNuevaCategoria";
import ModalSubcategoria from "../Components/ModalSubcategoria";
import ModalEditarCategoria from "../Components/ModalEditarCategoria";
import { PlusCircle } from "lucide-react";

export default function Categorias({ categorias }) {
    // Estado local para expandir/cerrar categorías
    const [expanded, setExpanded] = useState(
        categorias.reduce((acc, cat) => {
            acc[cat.id] = true;
            return acc;
        }, {})
    );

    const toggleExpand = (id) => {
        setExpanded((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    // Modal: Nueva categoría
    const [modalCat, setModalCat] = useState(false);

    // Modal: Editar categoría
    const [editModal, setEditModal] = useState({
        open: false,
        categoria: null,
    });

    // Modal: Nueva subcategoría
    const [modalSub, setModalSub] = useState({
        open: false,
        parentId: null,
    });

    // Crear categoría
    const addCategoria = (data) => {
        router.post("/categorias", data, {
            onSuccess: () => setModalCat(false),
        });
    };

    // Editar categoría
    const updateCategoria = (id, data) => {
        router.put(`/categorias/${id}`, data, {
            onSuccess: () => setEditModal({ open: false, categoria: null }),
        });
    };

    // Eliminar categoría
    const deleteCategoria = (id) => {
        if (confirm("¿Eliminar esta categoría?")) {
            router.delete(`/categorias/${id}`);
        }
    };

    // Crear subcategoría
    const addSubcategoria = (parentId, data) => {
        router.post(
            "/subcategorias",
            { ...data, categoria_id: parentId },
            {
                onSuccess: () => setModalSub({ open: false, parentId: null }),
            }
        );
    };
    const deleteSubcategoria = (id) => {
        if (confirm("¿Eliminar esta subcategoría?")) {
            router.delete(`/subcategorias/${id}`);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Categorías</h1>

                <button
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2"
                    onClick={() => setModalCat(true)}
                >
                    <PlusCircle size={22} />
                    Nueva categoría
                </button>
            </div>

            {/* Lista de categorías */}
            <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">
                {categorias.map((cat) => (
                    <CategoriaItem
                        key={cat.id}
                        categoria={{ ...cat, expanded: expanded[cat.id] }}
                        onToggleExpand={toggleExpand}
                        onAddSub={(id) =>
                            setModalSub({ open: true, parentId: id })
                        }
                        onEdit={(categoria) =>
                            setEditModal({ open: true, categoria })
                        }
                        onDelete={deleteCategoria}
                        onDeleteSub={deleteSubcategoria}
                    />
                ))}
            </div>
            {/* Modal: Nueva Categoría */}
            <ModalNuevaCategoria
                open={modalCat}
                onClose={() => setModalCat(false)}
                onSave={addCategoria}
            />
            {/* Modal: Editar Categoría */}
            <ModalEditarCategoria
                open={editModal.open}
                categoria={editModal.categoria}
                onClose={() =>
                    setEditModal({
                        open: false,
                        categoria: null,
                    })
                }
                onSave={(data) =>
                    updateCategoria(editModal.categoria.id, { name: data.name })
                }
            />
            {/* Modal: Nueva Subcategoría */}
            <ModalSubcategoria
                open={modalSub.open}
                parentId={modalSub.parentId}
                onClose={() => setModalSub({ open: false, parentId: null })}
                onSave={addSubcategoria}
            />
        </div>
    );
}
