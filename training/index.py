from training.AssetMetadata.index import extract_glb_metadata

def main():
    # Specify the path to the GLB file
    glb_file_path = 'path/to/your/coin.glb'

    try:
        # Extract the metadata from the GLB file
        metadata = extract_glb_metadata(glb_file_path)

        # Print the extracted metadata
        print(metadata)
    except ValueError as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()