export const parseHunkHeaderLine = (headerLine: string): HunkHeader => {
interface PatchMutationPart {
  type: "context" | "insertion" | "deletion"
  // TODO: check wheter renaming a file can have \ No newline at end of file
    return this._fileMode ? parseInt(this._fileMode, 8) & 0o777 : 0o644
            mode: this.fileMode,
        const toPath = this.lines[++this.i].slice("rename to ".length).trim()
          }
    }
    const startPath = this.currentLine.trim().slice("--- ".length)
export const parsePatch = (patchFileContents: string): ParsedPatchFile => {