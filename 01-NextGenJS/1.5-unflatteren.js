function listToTree(list) {
  var map = {},
    node,
    roots = [],
    i;
  for (i = 0; i < list.length; i += 1) {
    map[list[i].groupId] = i; // initialize the map
    list[i].children = []; // initialize the children
    list[i].hasChildren = false;
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentGroupId) {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentGroupId]].children.push(node);
      list[map[node.parentGroupId]].hasChildren = true;
    } else {
      roots.push(node);
    }
  }

  return roots;
}
