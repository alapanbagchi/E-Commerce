"use client";
import Typography from "./Typography";
import { ICategories } from "@/lib/categories";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { ChevronRightIcon } from "@/lib/icons/ChevronRightIcon";
import { SearchIcon } from "@/lib/icons/searchIcon";
import { Input } from "./Input";

export const CategorySelect = ({ categories }: { categories: ICategories[] }) => {
    const [selectedCategory, setSelectedCategory] = useState(['All']);
    const [displayCategories, setDisplayCategories] = useState<any>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const findTopLevelCategories = () => {
        return categories.filter(cat => cat.parentId === 0);
    };

    const findSubCategories = (parentId: number) => {
        return categories.filter(cat => cat.parentId === parentId);
    };

    useEffect(() => {
        const filterCategories = (categories: ICategories[], term: string) => {
            return categories.filter(cat => cat.name.toLowerCase().includes(term.toLowerCase()));
        };
        let categoriesToShow;
        // If "All" is selected, filter the top-level categories by the searchTerm
        if (selectedCategory.length === 1 && selectedCategory[0] === 'All') {
            const topLevelCategories = findTopLevelCategories();
            categoriesToShow = filterCategories(topLevelCategories, searchTerm);
        } else {
            // Find the last selected category
            const lastSelectedCategory = categories.find(cat => cat.name === selectedCategory[selectedCategory.length - 1]);
            if (lastSelectedCategory) {
                // Filter subcategories of the last selected category by the searchTerm
                categoriesToShow = filterCategories(findSubCategories(lastSelectedCategory.id), searchTerm);
            }
        }
        // Set the filtered categories to state
        setDisplayCategories(categoriesToShow);
    }, [selectedCategory, searchTerm, categories]);

    return (
        <div>
            {selectedCategory.length > 0 && (
                <div className="flex items-center border overflow-auto">
                    {selectedCategory.map((categoryName, index) => (
                        <div key={index} className="flex items-center">
                            <Button
                                onClick={() => {
                                    const newSelectedCategories = selectedCategory.slice(0, index + 1);
                                    setSelectedCategory(newSelectedCategories);
                                    setSearchTerm('');
                                }}
                                type="button"
                                variant="ghost"
                                size="sm"
                            >
                                {categoryName}
                            </Button>
                            {index !== selectedCategory.length - 1 && (
                                <ChevronRightIcon width="20" height="20" paths={["stroke-foreground stroke-2"]} />
                            )}
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-3 group">
                <div className="flex items-center border-2 px-3 focus-within:border-primary group transition-all">
                    <SearchIcon width="20" height="20" paths={["stroke-border stroke-2 group-focus-within:stroke-primary transition-all"]} />
                    <Input onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} variant="ghost" className="w-[250px]" placeholder="Search for a category" />
                </div>
                <div className="h-[500px] overflow-auto">
                    {displayCategories.map((category: any, index: number) => (
                        <Button
                            key={index}
                            onClick={() => {
                                const newSelectedCategories = [...selectedCategory, category.name];
                                setSelectedCategory(newSelectedCategories);
                            }}
                            type="button"
                            variant="ghost"
                            className="w-full border-b px-2 py-1 flex justify-between items-center font-normal cursor-pointer hover:bg-accent"
                        >
                            <Typography variant="p">{category.name}</Typography>
                            {findSubCategories(category.id).length > 0 && (
                                <div>
                                    <ChevronRightIcon width="20" height="20" paths={["stroke-foreground stroke-2"]} />
                                </div>
                            )}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};