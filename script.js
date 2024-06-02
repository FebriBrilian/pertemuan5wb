function calculateVolumes() {
  const cuboidLength = parseFloat(document.getElementById('panjang-balok').value);
  const cuboidWidth = parseFloat(document.getElementById('lebar-balok').value);
  const cuboidHeight = parseFloat(document.getElementById('tinggi-balok').value);

  const cubeSide = parseFloat(document.getElementById('sisi').value);

  const prismBase = parseFloat(document.getElementById('alas').value);
  const prismHeight = parseFloat(document.getElementById('tinggi-prisma').value);
  const prismLength = parseFloat(document.getElementById('lebar-prisma').value);

  const cuboidVolume = cuboidLength * cuboidWidth * cuboidHeight;
  const cubeVolume = cubeSide * cubeSide * cubeSide;
  const prismVolume = (prismBase * prismHeight) / 2 * prismLength;

  document.getElementById('cuboid-result').textContent = `Volume Balok: ${cuboidVolume}`;
  document.getElementById('cube-result').textContent = `Volume Kubus: ${cubeVolume}`;
  document.getElementById('prism-result').textContent = `Volume Prisma Segitiga: ${prismVolume}`;
}
