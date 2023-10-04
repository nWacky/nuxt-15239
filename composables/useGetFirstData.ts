export type FirstDataItem = {
  id: number;
  text: string;
};

export type FirstData = {
  items: FirstDataItem[];
};

export const useGetFirstData = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(0), 1000));

  const items = Array.from(Array(50).keys()).map((v) => {
    const item: FirstDataItem = {
      id: v,
      text: `This is element #${v}`,
    };

    return item;
  });

  return {
    items,
  };
};
