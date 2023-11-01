"use client"
import Typography from "./Typography"
import categories from "@/lib/mockdata/categories"
import { useEffect, useState } from "react"
import { Button } from "./Button"
import { ChevronRightIcon } from "@/lib/icons/ChevronRightIcon"

export const CategorySelect = () => {
    const [selectedCategory, setSelectedCategory] = useState<string[]>(['All']);
    const [category, setCategory] = useState(categories);
    useEffect(() => {
        if (selectedCategory.length === 1 && selectedCategory[0] === 'All') return setCategory(categories);
        let currentCategories = categories;
        for (let i = 1; i < selectedCategory.length; i++) {
            const currentCategory = currentCategories.find(cat => cat.title === selectedCategory[i]);
            if (currentCategory) {
                currentCategories = currentCategory.children;
            } else {
                break;
            }
        }
        setCategory(currentCategories);
    }, [selectedCategory]);

    return (
        <div>
            {
                selectedCategory.length > 0 && (
                    <div className="flex items-center border">
                        {
                            selectedCategory.map((category, index) => {
                                return (
                                    <div key={index} className="flex items-center">
                                        <Button onClick={
                                            () => {
                                                const index = selectedCategory.indexOf(category);
                                                if (index !== -1) {
                                                    const newSelectedCategories = [...selectedCategory.slice(0, index + 1)];
                                                    setSelectedCategory(newSelectedCategories);
                                                }
                                            }
                                        } type="button" variant="ghost" size="sm">{category}</Button>
                                        {
                                            index !== selectedCategory.length - 1 && (
                                                <ChevronRightIcon width="20" height="20" paths={["stroke-foreground stroke-2"]} />
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            <div className="mt-3 group">
                {
                    category.map((category, index) => {
                        return (
                            <Button key={index} onClick={() => {
                                const newSelectedCategories = [...selectedCategory, category.title];
                                setSelectedCategory(newSelectedCategories);
                            }} type="button" variant="ghost" className="w-full border-b px-2 py-1 flex justify-between items-center font-normal cursor-pointer hover:bg-accent">
                                <Typography variant="p">{category.title}</Typography>
                                {
                                    category.children.length > 0 && (
                                        <div>
                                            <ChevronRightIcon width="20" height="20" paths={["stroke-foreground stroke-2"]} />
                                        </div>
                                    )
                                }
                            </Button>
                        )
                    })
                }
            </div>
        </div>
    )
}