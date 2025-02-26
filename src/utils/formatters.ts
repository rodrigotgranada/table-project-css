export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR').format(date);
  };
  
  export const formatPhone = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');
    const ddd = cleaned.slice(3, 5);
    const part1 = cleaned.slice(5, 9);
    const part2 = cleaned.slice(9);
    return `(${ddd}) ${part1}-${part2}`;
  };

export const normalizeText = (text: string): string => {
  return text
    .normalize("NFD") 
    .replace(/[\u0300-\u036f]/g, "") 
    .toLowerCase(); 
};

  