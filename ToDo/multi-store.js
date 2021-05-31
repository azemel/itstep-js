class MultiStore {

  local;
  remote; 

  constructor(local, remote) {
    this.local = local;
    this.remote = remote;
  }

  static open(local, remote) {
    return new MultiStore(local, remote);
  }

  async seed(mockToDoList) {
    await this.remote.seed(mockToDoList);
  } 

  async sync() {
    this.local.override(await this.remote.getList());
  }

  async insert(item) {
    item = await this.remote.insert(item);
    await this.local.insert(item);

    return item;
  }

  async update(item) {
    item = await this.remote.update(item);
    await this.local.update(item);

    return item;
  }

  async delete(item) {
    await this.remote.delete(item);
    await this.local.delete(item);
  }


  getList() {
    return this.local.getList();
  }


}