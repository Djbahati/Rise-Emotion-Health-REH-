use wasm_bindgen::prelude::*;

// Export a function to JavaScript
#[wasm_bindgen]
pub fn analyze_mood(mood_text: &str) -> String {
    // This is a simple example - in a real app, you'd have more sophisticated analysis
    let text = mood_text.to_lowercase();
    
    if text.contains("happy") || text.contains("joy") || text.contains("great") {
        return "positive".to_string();
    } else if text.contains("sad") || text.contains("depressed") || text.contains("anxious") {
        return "negative".to_string();
    } else {
        return "neutral".to_string();
    }
}

// Calculate emotional health score (example algorithm)
#[wasm_bindgen]
pub fn calculate_health_score(positive_days: i32, negative_days: i32, total_days: i32) -> f64 {
    if total_days == 0 {
        return 50.0; // Default neutral score
    }
    
    let positive_ratio = positive_days as f64 / total_days as f64;
    let negative_ratio = negative_days as f64 / total_days as f64;
    
    // Simple algorithm: 50% baseline + up to 50% based on positive/negative ratio
    50.0 + (positive_ratio - negative_ratio) * 50.0
}

// Generate personalized recommendation based on mood history
#[wasm_bindgen]
pub fn generate_recommendation(mood_history: &str) -> String {
    let history = mood_history.to_lowercase();
    
    if history.contains("anxious") || history.contains("anxiety") {
        return "Try practicing deep breathing exercises for 5 minutes when feeling anxious.".to_string();
    } else if history.contains("sad") || history.contains("depressed") {
        return "Consider journaling about positive experiences, no matter how small.".to_string();
    } else if history.contains("stress") || history.contains("overwhelmed") {
        return "Take short breaks throughout the day to reset your mind.".to_string();
    } else {
        return "Continue your current wellness practices, they seem to be working well.".to_string();
    }
}
