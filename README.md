```mermaid
gitGraph
  %% === Main line (origin/master) ===
  branch origin/master
  checkout origin/master

  %% Older base around docker-dm 1.1.3-rc.15 → … → 1.2.x
  commit id: "ac62b79"    %% chore(docker-dm): rc.15
  commit id: "ab196eb"    %% docker-dm-1.1.3-rc.14
  tag: "docker-dm-1.1.3-rc.14"
  commit id: "03dfb3c"    %% docker-dm-1.1.3-rc.13
  tag: "docker-dm-1.1.3-rc.13"
  commit id: "06bbd7c"    %% docker-dm-1.1.3-rc.12
  tag: "docker-dm-1.1.3-rc.12"
  commit id: "29d819d"    %% docker-dm-1.1.3-rc.15
  tag: "docker-dm-1.1.3-rc.15"
  commit id: "5ed0dc1"    %% docker-dm-1.1.3-rc.16
  tag: "docker-dm-1.1.3-rc.16"
  commit id: "4f0507e"    %% docker-dm-1.1.3-rc.17
  tag: "docker-dm-1.1.3-rc.17"
  commit id: "b364197"    %% docker-dm-1.1.3-rc.18
  tag: "docker-dm-1.1.3-rc.18"
  commit id: "102c0b4"    %% docker-dm-1.1.3-rc.19
  tag: "docker-dm-1.1.3-rc.19"
  commit id: "8a26289"    %% docker-dm-1.1.3-rc.23
  tag: "docker-dm-1.1.3-rc.23"
  commit id: "ea09703"    %% docker-dm-1.1.3-rc.24
  tag: "docker-dm-1.1.3-rc.24"
  commit id: "4fb4f89"    %% docker-dm-1.1.3-rc.25
  tag: "docker-dm-1.1.3-rc.25"
  commit id: "be58ba5"    %% docker-dm-1.1.3-rc.26
  tag: "docker-dm-1.1.3-rc.26"
  commit id: "963fc07"    %% docker-dm-1.1.3-rc.27
  tag: "docker-dm-1.1.3-rc.27"
  commit id: "ab64bb9"    %% docker-dm-1.1.3-rc.28
  tag: "docker-dm-1.1.3-rc.28"
  commit id: "eb01a19"    %% docker-dm-1.1.3-rc.29
  tag: "docker-dm-1.1.3-rc.29"
  commit id: "5862113"    %% docker-dm-1.1.3-rc.30
  tag: "docker-dm-1.1.3-rc.29"   %% (as labeled in log)
  commit id: "fb62630"    %% docker-dm-1.1.3-rc.31
  commit id: "0739101"    %% docker-dm-1.2.0-rc.1
  commit id: "553cfcd"    %% DM 1.2.0 bump
  commit id: "92dfa7b"    %% mandate drop schema
  commit id: "53da972"
  tag: "docker-dm-1.2.0"
  commit id: "a854674"    %% rc.3
  commit id: "245c5c5"    %% docker-dm 1.2.0 from rc.2
  commit id: "11aca4b"    %% DM 1.2.1 bump

  %% === Topic branch: rbl/master/mandate-drop-schema-in-saas ===
  branch rbl/master/mandate-drop-schema-in-saas
  checkout rbl/master/mandate-drop-schema-in-saas
  commit id: "da92823"    %% feat: mandate drop schema (branch)
  checkout origin/master
  merge rbl/master/mandate-drop-schema-in-saas

  %% === Topic branch: rbl/master/dm-in-kind ===
  branch rbl/master/dm-in-kind
  checkout rbl/master/dm-in-kind
  commit id: "9f45de1"    %% chore(dm-in-kind action)...
  checkout origin/master
  merge rbl/master/dm-in-kind
  commit id: "c65ce11"    %% follow-up on main

  %% === Topic branch: re-attach-data-locations (WIP) ===
  branch rbl/master/re-attach-data-locations
  checkout rbl/master/re-attach-data-locations
  commit id: "7939efa"    %% feat
  commit id: "2a75793"    %% WIP
  %% (no merge back seen)
  checkout origin/master

  %% === Feature/bugfix branch synced from master: fix/rau/DM-770 ===
  branch fix/rau/DM-770
  checkout fix/rau/DM-770
  %% This branch merged origin/master into itself (not back to master)
  merge origin/master
  commit id: "517f865"    %% merge commit on the branch
  %% (kept open)
  checkout origin/master

  %% === Security/backport branch: rau/backport/DM-768 ===
  branch rau/backport/DM-768
  checkout rau/backport/DM-768
  commit id: "23ac38a"    %% backport security upgrades
  checkout origin/master
  merge rau/backport/DM-768

  %% === Snowflake fix branch hgt/DM-448 ===
  branch hgt/DM-448
  checkout hgt/DM-448
  commit id: "2504501"    %% refine non singletons
  commit id: "7e336ff"    %% merge within feature branch
  commit id: "2ea1068"
  checkout origin/master
  %% (feature work visible alongside main; merge to main not explicitly shown in snippet)

  %% === Release branches (backports/live maintenance) ===
  branch V2025_1
  checkout V2025_1
  commit id: "42e4477"    %% tag v2025.1.7.ga / cr2
  tag: "v2025.1.7.ga"
  tag: "v2025.1.7.cr2"
  commit id: "6de9653"    %% backport: headers etc.
  commit id: "1a89f21"
  commit id: "34dfaac"
  checkout origin/master

  branch V2024_1
  checkout V2024_1
  commit id: "637e729"    %% flaky test fix
  commit id: "dae1e1c"    %% security bumps
  commit id: "627b044"
  checkout origin/master

  %% === Current working branch (HEAD): rbl/master/chores ===
  branch rbl/master/chores
```
  checkout rbl/master/chores
  commit id: "20a0886"    %% chore: doc (HEAD)
