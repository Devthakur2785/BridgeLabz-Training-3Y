let feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert feedback to lowercase for checking
let lowerFeedback = feedback.toLowerCase();

// Count words
let words = feedback.trim().split(/\s+/);
console.log("Word Count: " + words.length);

// Check negative words
if (lowerFeedback.includes("bad") || lowerFeedback.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
