Events.run(ClientLoadEvent, () => {
  Planets.tantros.defaultCore = Vars.content.getByName(ContentType.block, "tt-mcp-core-aqua");
});