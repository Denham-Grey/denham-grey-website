"use client";

import { useEffect, useRef, useState } from "react";
import { peopleGroups, type PeopleGroup, type Profile } from "./people";

type ActiveProfile = { profile: Profile; group: PeopleGroup };

const ProfileAvatar = ({
  profile,
  className = "",
}: {
  profile: Profile;
  className?: string;
}) =>
  profile.image ? (
    <img
      className={`profile-photo ${className}`}
      src={profile.image}
      alt={`${profile.name}, ${profile.title}`}
      loading="lazy"
    />
  ) : (
    <div className={`profile-mark ${className}`} aria-hidden="true">
      {profile.initials}
    </div>
  );

export default function PeopleSection() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<ActiveProfile | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && dialog && !dialog.open) dialog.showModal();
  }, [active]);

  const closeProfile = () => dialogRef.current?.close();

  return (
    <section className="people-section" id="people">
      <div className="section-shell people-inner">
        <div className="people-heading">
          <p className="section-kicker section-kicker-light">Our people</p>
          <h2>Development Finance meets Banking Expertise.</h2>
          <p>
            A governance and management structure built for patient capital,
            responsible risk-taking and enduring institutional partnerships.
          </p>
        </div>

        <div className="people-groups">
          {peopleGroups.map((group) => (
            <section className="people-group" key={group.title}>
              <header>
                <span>{group.number}</span>
                <div>
                  <p>{group.label}</p>
                  <h3>{group.title}</h3>
                  <small>{group.description}</small>
                </div>
              </header>
              <div className="people-roster">
                {group.profiles.map((profile) => (
                  <article key={`${group.title}-${profile.name}`}>
                    {profile.bio ? (
                      <button
                        type="button"
                        className="profile-trigger"
                        aria-haspopup="dialog"
                        onClick={() => setActive({ profile, group })}
                      >
                        <ProfileAvatar profile={profile} />
                        <div>
                          <h4>{profile.name}</h4>
                          <p>{profile.title}</p>
                        </div>
                        <span className="profile-cue">
                          View profile <span aria-hidden="true">↗</span>
                        </span>
                      </button>
                    ) : (
                      <>
                        <ProfileAvatar profile={profile} />
                        <div>
                          <h4>{profile.name}</h4>
                          <p>{profile.title}</p>
                        </div>
                      </>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="profile-dialog"
        aria-labelledby="profile-dialog-name"
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeProfile();
        }}
      >
        {active && (
          <div className="profile-dialog-panel">
            <button
              type="button"
              className="profile-dialog-close"
              onClick={closeProfile}
              aria-label="Close profile"
            >
              <span aria-hidden="true">×</span>
            </button>

            <header className="profile-dialog-header">
              <ProfileAvatar
                profile={active.profile}
                className="profile-dialog-avatar"
              />
              <div>
                <p className="profile-dialog-kicker">
                  <span>{active.group.number}</span> {active.group.title}
                </p>
                <h3 id="profile-dialog-name">{active.profile.name}</h3>
                <p className="profile-dialog-role">{active.profile.title}</p>
              </div>
            </header>

            <div className="profile-dialog-body">
              <p className="profile-dialog-bio">{active.profile.bio}</p>

              {active.profile.highlights && (
                <dl className="profile-dialog-highlights">
                  {active.profile.highlights.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {active.profile.expertise && (
                <div className="profile-dialog-block">
                  <p className="profile-dialog-label">Areas of expertise</p>
                  <ul className="profile-dialog-tags">
                    {active.profile.expertise.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {active.profile.experience && (
                <div className="profile-dialog-block">
                  <p className="profile-dialog-label">Institutional experience</p>
                  <ul className="profile-dialog-history">
                    {active.profile.experience.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
