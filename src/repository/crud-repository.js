export class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async createEntry(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async readEntry(entryId) {
    try {
      if (!entryId) {
        const response = await this.model.find();
        return response;
      }
      const response = await this.model.findById(entryId);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async removeEntry(entryId) {
    try {
      await this.model.findByIdAndDelete(entryId);
      return true;
    } catch (error) {
      console.log("Error occured while deleting entry");
      throw error;
    }
  }

  async updateEntry(entryId, updatedData) {
    try {
      const response = await this.model.findByIdAndUpdate(entryId, updatedData);
      return response;
    } catch (error) {
      console.log("Error occured while updating entry");
      throw error;
    }
  }
}
