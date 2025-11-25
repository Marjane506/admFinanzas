import { create } from "zustand";

export const useCategoriasStore = create((set) => ({
    categorias: [
        {
            id: 1,
            name: "Alimentación",
            color: "#FF6B6B",
            expanded: true,
            subcategorias: [],
        },
        {
            id: 2,
            name: "Transporte",
            color: "#4ECDC4",
            expanded: true,
            subcategorias: [],
        },
        {
            id: 3,
            name: "Vivienda",
            color: "#FFD93D",
            expanded: true,
            subcategorias: [],
        },
        {
            id: 4,
            name: "Salario",
            color: "#6BCB77",
            expanded: true,
            subcategorias: [],
        },
        {
            id: 5,
            name: "Inversiones",
            color: "#4D96FF",
            expanded: true,
            subcategorias: [],
        },
    ],

    // --- ACCIONES ---
    toggleExpand: (id) =>
        set((state) => ({
            categorias: state.categorias.map((cat) =>
                cat.id === id ? { ...cat, expanded: !cat.expanded } : cat
            ),
        })),

    addCategoria: (data) =>
        set((state) => ({
            categorias: [
                ...state.categorias,
                {
                    id: Date.now(),
                    name: data.name,
                    expanded: true,
                    subcategorias: [],
                },
            ],
        })),

    updateCategoria: (id, data) =>
        set((state) => ({
            categorias: state.categorias.map((cat) =>
                cat.id === id ? { ...cat, name: data.name } : cat
            ),
        })),

    deleteCategoria: (id) =>
        set((state) => ({
            categorias: state.categorias.filter((cat) => cat.id !== id),
        })),

    addSubcategoria: (parentId, data) =>
        set((state) => ({
            categorias: state.categorias.map((cat) =>
                cat.id === parentId
                    ? {
                          ...cat,
                          subcategorias: [
                              ...cat.subcategorias,
                              {
                                  id: Date.now(),
                                  ...data,
                                  value: Number(data.value || 0),
                                  color: cat.color,
                              },
                          ],
                      }
                    : cat
            ),
        })),
}));
