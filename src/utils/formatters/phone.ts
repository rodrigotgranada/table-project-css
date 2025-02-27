export const formatPhone = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, "");
    const ddi = cleaned.slice(0, 2);
    const ddd = cleaned.slice(3, 5);
    const part1 = cleaned.slice(5, 10);
    const part2 = cleaned.slice(10);
    return `+${ddi} (${ddd}) ${part1}-${part2}`;
  };