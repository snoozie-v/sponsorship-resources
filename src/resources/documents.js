export const documents = [
  // === Step 1 ===
  {
    id: 'step-1-powerless',
    title: 'Step 1 Powerless',
    path: '/docs/step-1/step-1-powerless.pdf',
    type: 'pdf',
    steps: [1],
    category: 'Step Work',
    description: 'Powerlessness worksheet for Step 1',
  },
  {
    id: 'step-1-part-2',
    title: 'Step 1 Unmanageability',
    path: '/docs/step-1/step1part2.pdf',
    type: 'pdf',
    steps: [1],
    category: 'Step Work',
    description: 'Unmanageability worksheet for Step 1',
  },
];

export function getDocumentsForStep(stepNumber) {
  return documents.filter((doc) => doc.steps.includes(stepNumber));
}
