Events.run(ClientLoadEvent, () => {
  const nickel = Vars.content.item("tt-mcp-nickel");
  const steel = Vars.content.item("tt-mcp-steel");
  const iron = Vars.content.item("tt-mcp-iron");
  const tantrosOnlyItems = [nickel, steel, iron];
  
  Planets.erekir.hiddenItems.add(tantrosOnlyItems);
  Planets.serpulo.hiddenItems.add(tantrosOnlyItems);
});