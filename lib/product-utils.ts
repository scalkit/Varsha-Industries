import { productCategories } from "@/lib/site-data";

export function slugifyProduct(value: string) {
    return value
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

export function getProductPath(categoryId: string, model: string) {
    return `/products/${categoryId}/${slugifyProduct(model)}`;
}

export function getProductBySlug(categoryId: string, productId: string) {
    const category = productCategories.find((item) => item.id === categoryId);
    if (!category) {
        return null;
    }

    const model = category.models.find((item) => slugifyProduct(item) === productId);
    if (!model) {
        return null;
    }

    return { category, model };
}

export function getProductSummary(categoryTitle: string, model: string) {
    if (categoryTitle.toLowerCase().includes("filter cloth")) {
        return `${model} is supplied for dependable oil filtration performance, with material selection aligned to the filter press size, oil type and operating conditions.`;
    }

    if (categoryTitle.toLowerCase().includes("filter press")) {
        return `${model} filter press machine is built for consistent oil clarification, sturdy plate alignment and practical maintenance in edible and non-edible oil processing plants.`;
    }

    if (categoryTitle.toLowerCase().includes("cold press")) {
        return `${model} cold press oil machine is designed for controlled extraction, reliable output and smooth operation for small to mid-scale oil production.`;
    }

    return `${model} oil expeller machine is engineered for robust seed crushing, steady torque transfer and long working life in commercial oil processing applications.`;
}
