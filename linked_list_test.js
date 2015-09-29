mocha.setup("bdd");

describe('testing', function () {
  it('creates a new list with an empty head node', function () {
    var list = createList();
    assert.isNull(list.head);
  });

  it('appends an item to the list', function() {
    var list = createList();
    append(list, "pizza");
    assert.equal(list.head.data, "pizza");
    append(list, "pepperoni");
  });

  it('appends more items to the list', function() {
    var list = createList();
    append(list, "pizza");
    append(list, "pepperoni");
    assert.equal(list.head.data, "pizza");
    assert.equal(list.head.nextNode.data, "pepperoni");
  });

  it ('knows the head of a list', function () {
    var list = createList();
    append(list, "pizza");
    append(list, "pepperoni");
    assert.equal(headValue(list), "pizza");
  });

  it ('knows the tail of a list', function() {
    var list = createList();
    append(list, "pizza");
    append(list, "pepperoni");
    assert.equal(tailValue(list), "pepperoni");
  });

  it ('can count items in a list', function () {
    var list = createList();
    assert.equal(count(list), 0);
    append(list, "pizza");
    assert.equal(count(list), 1)
    append(list, "pepperoni");
    assert.equal(count(list), 2)
  });

  it ('can pop off the last item of a list', function () {
    var list = createList();
    append(list, "pizza");
    append(list, "pepperoni");
    assert.equal(count(list), 2);
    pop(list);
    assert.equal(count(list), 1);
  });
});
