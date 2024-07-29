import { ActorIdentity } from "@w2e/types";
import { UserStorage, UserStorageInterfaceFactory } from "@w2e/candid";
import { actor } from "../actor";

export const userStorage = (id: string, identity?: ActorIdentity) =>
  actor.create<UserStorage>({
    idlFactory: UserStorageInterfaceFactory,
    canisterId: id,
    identity,
  });
