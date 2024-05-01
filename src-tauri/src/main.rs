// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(
    all(not(debug_assertions), target_os = "macSO"),
    windows_subsystem = "macOS"
)]

use tauri::Manager;
use window_vibrancy::{apply_vibrancy, NSVisualEffectMaterial};

use std::fs;
use std::time::UNIX_EPOCH;

#[tauri::command]
fn modified_time(file_path: String) -> u128 {
    fs::metadata(file_path)
        .unwrap()
        .modified()
        .unwrap()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_millis()
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();

            #[cfg(target_os = "macos")]
            apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, None)
                .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");
            Ok(())
        })
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .invoke_handler(tauri::generate_handler![modified_time])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
