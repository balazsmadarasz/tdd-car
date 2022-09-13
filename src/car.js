class Car {
  #serialNumber;
  #status = "PENDING";
  #isCertUploaded = false;

  constructor(serialNumber) {
    this.#serialNumber = serialNumber;
  }

  uploadCertificate() {
    this.#isCertUploaded = true;
  }

  accepted() {
    if (!this.#isCertUploaded) {
        throw new Error("Please upload a valid certificate.");
    }
    this.#status = "ACCEPTED";
  }

  notAccepted() {
    if (!this.#isCertUploaded) {
        throw new Error("Please upload a valid certificate.");
    }
    this.#status = "NOT_ACCEPTED";
  }

  getStatus() {
      return this.#status;
  }
}

module.exports = Car;
