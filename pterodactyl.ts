export const deployServer = async (userId: string, plan: { ram: number, cpu: number }) => {
  const res = await fetch(`${process.env.PTERO_URL}/api/application/servers`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${process.env.PTERO_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: `User-${userId}-Server`,
      user: userId,
      egg: 15, // Minecraft Egg
      limits: { memory: plan.ram, cpu: plan.cpu, disk: 10240 },
      feature_limits: { databases: 1, backups: 1 }
    })
  });
  return res.json();
};