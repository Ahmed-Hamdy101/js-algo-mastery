/**
 * 🔥 CHALLENGE 13: Password Strength Validator
 * 
 * Difficulty: 🟡 MEDIUM
 * Concepts: Set + Map + Recursion
 * Based on: Chapter 1, 4, 5
 * 
 * ============================================================================
 * Build 1Password/LastPass validator! Check strength, suggest improvements!
 * ============================================================================
 */

class PasswordValidator {
    constructor() {
        this.weakPasswords = new Set([
            "password", "123456", "qwerty", "admin", "letmein"
        ]);
        this.strengthScores = new Map();
    }

    validateStrength(password) {
        // YOUR CODE HERE
        // Return score 0-100
    }

    checkCommonPatterns(password) {
        // YOUR CODE HERE
        // Check keyboard patterns, dates, etc
    }

    calculateEntropy(password) {
        // YOUR CODE HERE
        // Use character frequency
    }

    suggestImprovements(password) {
        // YOUR CODE HERE
        // Return suggestions array
    }

    generateStrongPassword(length = 16) {
        // YOUR CODE HERE - BONUS
    }
}

// TEST
const validator = new PasswordValidator();
console.log("Strength of 'pass123':", validator.validateStrength("pass123"));
console.log("Strength of 'Tr0ng!P@ssw0rd#2024':", validator.validateStrength("Tr0ng!P@ssw0rd#2024"));
console.log("Validate those passwords!");
