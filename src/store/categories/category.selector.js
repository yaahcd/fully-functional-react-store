export const selectCategoriesMap = (state) =>
  state.categories.categories.reduce((acc, curr) => {
    const { title, items } = curr;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

//criando um obj com reduce
