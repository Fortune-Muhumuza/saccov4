// src/models/Member.js

export class Member {
    constructor(name, initialDeposit = 0) {
        this.id = crypto.randomUUID(); // Generates a unique ID
        this.name = name;
        this.savingsBalance = Number(initialDeposit);
        this.joinDate = new Date().toLocaleDateString();
        this.role = 'member';
    }

    // A simple method we can expand later
    deposit(amount) {
        this.savingsBalance += Number(amount);
        return this.savingsBalance;
    }

    editMemberRole(role) {
        this.role = role
    }
}