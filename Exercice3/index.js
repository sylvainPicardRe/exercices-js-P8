// Créez votre fonction ici
function calculateAverage(numbers) {
  // Vérifier si le tableau est vide
  if (numbers === undefined) {
    return 'No numbers to calculate average';
  }
  
  // Vérifier si le tableau est vide
  if (numbers.length === 0) {
    return 'No numbers to calculate average';
  }
  
  // Calculer la somme des nombres
  const sum = numbers.reduce((acc, number) => acc + number, 0);
  
  // Calculer la moyenne
  return sum / numbers.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
