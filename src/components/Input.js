import React from 'react';
import './Input.scss';

const Input = ({
	title = '<Input />',
	error = false,
	disabled = false,
	helperText = false,
	startIcon = false,
	endIcon = false,
	value = false,
	size = false,
	fullWidth = false,
	multiline = false,
	row = '4',
}) => {
	return (
		<div className={fullWidth && 'fullWidth'}>
			<p className="inputTitle">{title}</p>
			<div className={'inputBlock ' + (error ? 'error ' : ' ') + (disabled ? ' disabled ' : ' ')}>
				<label htmlFor="inputLabel" className={`inputLabel`}>
					Label
				</label>
				{startIcon && <i className={`material-icons startIcon`}>{startIcon}</i>}
				{value ? (
					<input
						type="text"
						name="inputLabel"
						id="inputLabel"
						placeholder="Placeholder"
						className={`inputBox ${size}`}
						value={value}
						onChange={(e) => console.log(e.target.value)}
					/>
				) : multiline ? (
					<textarea rows={row} name="inputLabel" id="inputLabel" placeholder="Placeholder" className={`inputBox`} />
				) : (
					<input
						type="text"
						name="inputLabel"
						id="inputLabel"
						placeholder="Placeholder"
						className={`inputBox ${size} ${startIcon}`}
					/>
				)}
				{endIcon && <i className="material-icons endIcon">{endIcon}</i>}
				{helperText && <p className="helperText">{helperText}</p>}
			</div>
		</div>
	);
};

export default Input;
