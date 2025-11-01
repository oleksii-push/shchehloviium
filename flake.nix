{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs =
    { nixpkgs, ... }:
    let
      eachSystem =
        f:
        nixpkgs.lib.genAttrs nixpkgs.lib.systems.flakeExposed (system: f nixpkgs.legacyPackages.${system});
    in
    {
      devShells = eachSystem (pkgs: {
        default = pkgs.mkShell {
          packages = [
            pkgs.nodejs

            pkgs.nodePackages.typescript
            pkgs.nodePackages.typescript-language-server

            # Python is required on NixOS if the dependencies require node-gyp

            # pkgs.python3
          ];
        };
      });
    };
}
