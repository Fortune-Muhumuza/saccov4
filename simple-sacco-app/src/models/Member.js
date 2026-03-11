// src/models/Member.js

export class Member {
    constructor(name, initialDeposit = 0) {
        this.id = crypto.randomUUID(); // Generates a unique ID
        this.name = name;
        this.savingsBalance = Number(initialDeposit);
        this.joinDate = new Date().toLocaleDateString();
        this.role = 'member';
        this.loanedAmount = 0;
    }

    // A simple method we can expand later
    deposit(amount) {
        this.savingsBalance += Number(amount);
        return this.savingsBalance;
    }

    editMemberRole(role) {
        this.role = role
    }

    giveLoan(amount, member) {
        if (member.role === 'admin') {
            this.loanedAmount += Number(amount);
            return this.loanedAmount;
        }
        return 'You are not authorized to give loan'
    }
}